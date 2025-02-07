# 编译及更新镜像

- 修改 build.sh 中的 FEIKONGWANG_VERSION

- 执行 build.sh: `./build.sh`

- 将镜像推送至aws镜像仓库:

  - 安装或更新最新版本的 Amazon CLI: https://docs.amazonaws.cn/cli/latest/userguide/getting-started-install.html

  - 检索身份验证令牌并向注册表验证 Docker 客户端身份。使用 Amazon Web Services CLI：
    `aws ecr get-login-password --region cn-northwest-1 | docker login --username AWS --password-stdin 252208178451.dkr.ecr.cn-northwest-1.amazonaws.com.cn`

  - 标记您的映像，以便将映像推送到此存储库:
    `docker tag steedos/feikongwang:{FEIKONGWANG_VERSION} 252208178451.dkr.ecr.cn-northwest-1.amazonaws.com.cn/dockerhub/steedos/feikongwang:{FEIKONGWANG_VERSION}`

  - 运行以下命令将此映像推送到您的 Amazon Web Services 存储库:
    `docker push 252208178451.dkr.ecr.cn-northwest-1.amazonaws.com.cn/dockerhub/steedos/feikongwang:{FEIKONGWANG_VERSION}`

- 推送到aws后到aws ecr控制台检查是否推送成功： https://cn-northwest-1.console.amazonaws.cn/ecr/repositories/dockerhub/steedos/feikongwang?region=cn-northwest-1

- 确认推送成功后，在 https://kuboard.steedos.cn/ 的命名空间 steedos-expense-saas 中调整镜像版本并删除旧的副本集。