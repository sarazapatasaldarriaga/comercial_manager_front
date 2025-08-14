variable "project_name" {
  description = "The name of the project."
  type        = string
}

variable "environment" {
  description = "The environment for the deployment."
  type        = string
}

variable "aws_region" {
  description = "The AWS region."
  type        = string
}

variable "github_owner" {
  description = "The owner of the GitHub repository."
  type        = string
}

variable "github_repo" {
  description = "The name of the GitHub repository."
  type        = string
}

variable "github_branch" {
  description = "The branch of the GitHub repository."
  type        = string
}

variable "codestar_connection_arn" {
  description = "The ARN of the CodeStar connection to GitHub."
  type        = string
}

variable "s3_bucket_name" {
  description = "The name of the S3 bucket where the static website will be deployed."
  type        = string
}

variable "api_endpoint_url" {
  description = "The full URL of the backend API."
  type        = string
}
