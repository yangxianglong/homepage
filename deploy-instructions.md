# GitHub Pages 部署指南

## 步骤 1: 创建 GitHub 仓库
1. 登录 GitHub (https://github.com)
2. 点击右上角 "+" → "New repository"
3. Repository name: `ophthalmology-dealer-homepage`
4. 选择 "Public"
5. 不要勾选任何初始化选项
6. 点击 "Create repository"

## 步骤 2: 推送代码
在创建仓库后，复制仓库的URL，然后在终端运行：

```bash
# 添加远程仓库（将YOUR_USERNAME替换为您的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/ophthalmology-dealer-homepage.git

# 推送到GitHub
git branch -M main
git push -u origin main
```

## 步骤 3: 启用 GitHub Pages
1. 在 GitHub 仓库页面，点击 "Settings"
2. 滚动到 "Pages" 部分（左侧菜单）
3. Source 选择 "Deploy from a branch"
4. Branch 选择 "main"
5. Folder 选择 "/ (root)"
6. 点击 "Save"

## 步骤 4: 访问网站
等待几分钟后，您的网站将在以下地址可用：
`https://YOUR_USERNAME.github.io/ophthalmology-dealer-homepage/`

## 注意事项
- 首次部署可能需要10-20分钟
- 后续更新只需 git push 即可自动部署
- 确保 index.html 在根目录