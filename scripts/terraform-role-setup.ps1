# Obtener el ARN del usuario actual
$userArn = (aws iam get-user | ConvertFrom-Json).User.Arn

# Crear política de confianza para la ejecución de Terraform
$trustPolicy = @"
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "$userArn"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
"@

aws iam create-role `
  --role-name TerraformExecutionRoleFRONT `
  --assume-role-policy-document "$trustPolicy"

# Definir políticas específicas
$policies = @{
  "TerraformS3Policy" = @'
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "S3Manage",
      "Effect": "Allow",
      "Action": [
        "s3:CreateBucket",
        "s3:DeleteBucket",
        "s3:GetBucketPolicy",
        "s3:PutBucketPolicy",
        "s3:PutBucketWebsite",
        "s3:GetBucketWebsite",
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": "*"
    }
  ]
}
'@

  "TerraformPipelinePolicy" = @'
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PipelineManage",
      "Effect": "Allow",
      "Action": [
        "codepipeline:CreatePipeline",
        "codepipeline:DeletePipeline",
        "codepipeline:GetPipeline",
        "codepipeline:UpdatePipeline",
        "codepipeline:StartPipelineExecution"
      ],
      "Resource": "*"
    }
  ]
}
'@

  "TerraformCodeBuildPolicy" = @'
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "CodeBuildManage",
      "Effect": "Allow",
      "Action": [
        "codebuild:CreateProject",
        "codebuild:DeleteProject",
        "codebuild:BatchGetProjects",
        "codebuild:StartBuild"
      ],
      "Resource": "*"
    }
  ]
}
'@

  "TerraformIamPolicy" = @'
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "IamManage",
      "Effect": "Allow",
      "Action": [
        "iam:CreateRole",
        "iam:DeleteRole",
        "iam:AttachRolePolicy",
        "iam:DetachRolePolicy",
        "iam:PassRole",
        "iam:GetRole"
      ],
      "Resource": "*"
    }
  ]
}
'@
}

# Crear y adjuntar cada política al rol
foreach ($policyName in $policies.Keys) {
  Write-Host "Creando política: $policyName"
  $policyDoc = $policies[$policyName]
  $policyArn = aws iam create-policy `
    --policy-name $policyName `
    --policy-document $policyDoc `
    | ConvertFrom-Json | Select-Object -ExpandProperty Policy | Select-Object -ExpandProperty Arn

  Write-Host "Adjuntando $policyName al rol TerraformExecutionRoleFRONT"
  aws iam attach-role-policy `
    --role-name TerraformExecutionRoleFRONT `
    --policy-arn $policyArn
}

Write-Host "Todo listo: rol y políticas creadas y asociadas."