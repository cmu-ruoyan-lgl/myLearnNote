feat:新功能(feature)
fix:修补bug
docs:文档(documentation)
style:格式(不影响代码运行的改动)
refactor:重构(既不是新增功能，也不是修改bug的改动)
chore:构建过程或辅助工具的变动
revert:撤销，版本回退
perf:性能优化
test:测试
improvement:改进
build:打包
ci:持续集成

git:合并多个commit
1. git log 查看要合并的commit ID
2. git rebase -i 打开交互式rebase编辑器
3. 在编辑器中将要合并的commit的pick命令改成fixup命令。fixup命令会讲当前commit和前一个commit合并，并将当前的commit注释丢弃。
4. 保存并关闭编辑器
5. git将打开一个新的编辑器，其中一个包含合并后的注释，你可以编辑此注释，然后保存并关闭编辑器。
6. git log 检查合并后的commit
7. git push