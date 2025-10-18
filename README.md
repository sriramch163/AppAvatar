# Avatar App - React Website with AWS Deployment

A React application featuring avatar components, deployed to AWS using Terraform infrastructure as code.

## Project Structure
```
avatarapp/
├── src/
│   ├── Components/Avatar.jsx    # Main avatar component
│   └── Styles/Avatar.css        # Avatar styling
├── terraform/                   # AWS infrastructure code
│   ├── main.tf                 # S3 + CloudFront setup
│   ├── variables.tf            # Configuration variables
│   └── outputs.tf              # Website URL output
└── build/                      # Production build (generated)
```

## Local Development
```bash
npm install
npm start                       # http://localhost:3000
npm run build                   # Create production build
```

## AWS Deployment

### Prerequisites
- AWS CLI configured
- Terraform installed
- AWS account with S3/CloudFront permissions

### Deploy to AWS
```bash
# 1. Setup infrastructure
cd terraform
aws configure
terraform init
terraform apply

# 2. Deploy website
cd ..
npm run build
cd terraform
aws s3 sync ../build/ s3://avatarapp-website-2024 --delete

# 3. Get live URL
terraform output website_url
```

### Destroy Infrastructure
```bash
cd terraform
aws s3 rm s3://avatarapp-website-2024 --recursive
terraform destroy
```

## What Gets Created
- **S3 Bucket**: Hosts your React files
- **CloudFront CDN**: Global distribution with HTTPS
- **Live Website**: Accessible via CloudFront URL

## Cost
- S3: ~$0.023/GB/month
- CloudFront: Free tier (1TB transfer)
- Total: Usually under $1/month
