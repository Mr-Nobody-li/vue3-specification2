# vue3-前端规范

这个仓库是一个模板仓库，针对使用`vue3`、`js/ts`开发的项目使用，仓库已经配置好了一些前端规范的依赖和插件，具体包括

- [x] eslint、prettier、stylelint
- [x] lint-staged、husky
- [ ] vite 打包优化

### 包管理器优先级

```
pnpm > yarn2+ > npm
```

### 推荐安装的 vscode 插件

添加.vscode\extensions.json 配置文件，这里面是项目推荐安装的 vscode 插件

```
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "stylelint.vscode-stylelint"
    "obkoro1.korofileheader"
  ]
}

```

`korofileheader`是一个可以自动生成函数、文件头部注释的插件，方便我们快速阅读代码。安装之后需要加一些插件配置，主要是为了减少合并代码造成的冲突

```
{
  "fileheader.customMade": {
    "Author": "git config user.name", // 获取用户名
    "Date": "Do not edit", // 文件创建时间(不变)
    "LastEditors": "git config user.name", // 文件最后编辑者 与Author字段一致
    // 由于编辑文件就会变更最后编辑时间，多人协作中合并的时候会导致merge
    // 可以将时间颗粒度改为周、或者月，这样冲突就减少很多。搜索变更时间格式: dateFormat
    "LastEditTime": "Do not edit", // 文件最后编辑时间
    // 插件会自动将光标移动到Description选项中 方便输入 Description字段可以在specialOptions更改
    "Description": "" // 介绍文件的作用、文件的入参、出参。
  },
  "fileheader.configObj": {
    "autoAdd": true, // 检测文件没有头部注释，自动添加文件头部注释
    "dateFormat": "YYYY-MM" // 输出：2019-05 该功能将影响所有时间字段
  }
}
```

### eslint

除了继承一些官方推荐配置选项以外，也自定义了一些规则，可以更好的约束我们代码质量

如果安装了 vscode 的 prettier 插件，为了避免和 eslint 的冲突，需要添加.prettierrc 配置文件

```
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "none",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

### stylelint

这个好理解 就是检查样式的

需要以下依赖(安装完毕后需要重启 vscode)

```
npm i -D postcss postcss-html postcss-scss stylelint stylelint-config-html stylelint-config-recess-order stylelint-config-recommended
```

### husky lint-staged

husky：代码提交钩子，例如 pre-commit 钩子就会在你执行 git commit 前触发

lint-staged：对 Git 暂存区代码(被 git add 的文件)进行质量检查

安装依赖

```
npm i -D husky lint-staged @commitlint/cli @commitlint/config-conventional
```

husky 提供了自动配置命令,完整介绍可以在 husky 官网查看

```
npx husky-init && npm install       # npm
npx husky-init && yarn              # Yarn 1
yarn dlx husky-init --yarn2 && yarn # Yarn 2+
pnpm dlx husky-init && pnpm install # pnpm
```

### 问题记录

**Q:**
Unknown word (CssSyntaxError)错误

**A:**
没有安装 postcss 插件(安装完毕后需要重启 vscode)

```
"postcss": "^8.4.8",
"postcss-html": "^1.3.0",
"postcss-scss": "^4.0.3",
```
