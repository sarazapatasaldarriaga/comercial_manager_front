#!/bin/bash
set -e

# Obtener el ARN del usuario actual
userArn=$(aws iam get-user --query "User.Arn" --output text)

# Crear política de confianza para la ejecución de Terraform
trustPolicy=$(cat <<EOF
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
EOF
)

echo "Creando rol TerraformExecutionRoleFRONT..."
aws iam create-role \
  --role-name TerraformExecutionRoleFRONT \
  --assume-role-policy-document "$trustPolicy"

# Definir políticas en un array asociativo
declare -A policies

policies["TerraformS3Policy"]='{
  "Version": "2012-10-17",
  "Statement": [{
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
  }]
}'

policies["TerraformPipelinePolicy"]='{
  "Version": "2012-10-17",
  "Statement": [{
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
  }]
}'

policies["TerraformCodeBuildPolicy"]='{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "CodeBuildManage",
    "Effect": "Allow",
    "Action": [
      "codebuild:CreateProject",
      "codebuild:DeleteProject",
      "codebuild:BatchGetProjects",
      "codebuild:StartBuild"
    ],
    "Resource": "*"
  }]
}'

policies["TerraformIamPolicy"]='{
  "Version": "2012-10-17",
  "Statement": [{
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
  }]
}'

# Crear y adjuntar cada política
for policyName in "${!policies[@]}"; do
  echo "Creando política: $policyName"
  policyDoc="${policies[$policyName]}"

  policyArn=$(aws iam create-policy \
    --policy-name "$policyName" \
    --policy-document "$policyDoc" \
    --query "Policy.Arn" \
    --output text)

  echo "Adjuntando $policyName al rol TerraformExecutionRoleFRONT"
  aws iam attach-role-policy \
    --role-name TerraformExecutionRoleFRONT \
    --policy-arn "$policyArn"
done

echo "Todo listo: rol y políticas creadas y asociadas."