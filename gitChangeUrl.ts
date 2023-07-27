
import simpleGit from 'simple-git';


type configType = {
    localName:string,
    remoteName?:string,
    remoteUrl:string
}

const gitConfig : configType[] = [
    {
        localName: "taiwan/develop",
        remoteUrl: ""
    },
]

async function _changeGitUrl(now : configType) {
    return new Promise((resolve, reject) => {
        try {
            


        } catch(error) {
            console.log(error);
        }
    });
}

function addAndSwitchBranch(remoteName: string, remoteUrl: string): void {
    // 检查是否存在权限或者 URL 是否为空
    if (!remoteUrl || !remoteName) {
        return;  // 不执行任何操作
    }

    // 在这里编写添加并切换分支的代码
    // 使用你想要的 Git 工具（如 Git CLI 或 Git 库）

    console.log(`已将当前分支添加并切换到远程分支 ${remoteName} (${remoteUrl})`);
}

// 主逻辑，根据 gitConfig 的配置进行操作
gitConfig.forEach(config => {
    // 检查配置是否包含远程分支信息
    if (config.remoteName && config.remoteUrl) {
        addAndSwitchBranch(config.remoteName, config.remoteUrl);
    }
});