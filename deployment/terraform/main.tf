
# ----------------------------------------------------------------------------------------
# S3 Module
# ----------------------------------------------------------------------------------------
module "s3" {
  source      = "./modules/s3"
  project_name = var.project_name
  environment = var.environment
}

# ----------------------------------------------------------------------------------------
# CodePipeline Module
# ----------------------------------------------------------------------------------------
module "codepipeline" {
  source                  = "./modules/codepipeline"
  project_name            = var.project_name
  environment             = var.environment
  aws_region              = var.aws_region
  github_owner            = var.github_owner
  github_repo             = var.github_repo
  github_branch           = var.github_branch
  codestar_connection_arn = var.codestar_connection_arn
  s3_bucket_name          = module.s3.s3_bucket_name
  api_endpoint_url        = var.api_endpoint_url
}

# ----------------------------------------------------------------------------------------
# Outputs
# ----------------------------------------------------------------------------------------

output "s3_bucket_website_endpoint" {
  description = "The website endpoint of the S3 bucket."
  value       = module.s3.s3_bucket_website_endpoint
}

