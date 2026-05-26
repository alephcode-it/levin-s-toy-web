const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''
const computedBasePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions && repoName ? `/${repoName}` : '')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: computedBasePath,
  assetPrefix: computedBasePath ? `${computedBasePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: computedBasePath,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
