
variable "aws_region" {
  description = "The AWS region where all resources will be created."
  type        = string
}

variable "project_name" {
  description = "A name for the project, used to prefix resource names."
  type        = string
}

variable "environment" {
  description = "The deployment environment (e.g., 'dev', 'staging', 'prod')."
  type        = string
}

variable "github_owner" {
  description = "The GitHub username or organization that owns the repository."
  type        = string
}

variable "github_repo" {
  description = "The name of the GitHub repository."
  type        = string
}

variable "github_branch" {
  description = "The branch to be used by CodePipeline."
  type        = string
  default     = "main"
}

variable "codestar_connection_arn" {
  description = "The ARN of the AWS CodeStar connection to GitHub. This must be created manually in the AWS console."
  type        = string
}

variable "api_endpoint_url" {
  description = "The full URL of the backend API."
  type        = string
}
