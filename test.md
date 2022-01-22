# Vue3 템플릿 with Webpack

## Installation

\`\`\`bash

# Default.

$ npx degit ParkYoungWoong/vue3-webpack-template DIRECTORY_NAME

# With ESLint, Add \`#eslint\`.

$ npx degit ParkYoungWoong/vue3-webpack-template#eslint DIRECTORY_NAME

# With ESLint + Vuex, Add \`#vuex\`.

$ npx degit ParkYoungWoong/vue3-webpack-template#vuex DIRECTORY_NAME

# With ESLint + Vuex + VueRouter, Add \`#vue-router\`.

$ npx degit ParkYoungWoong/vue3-webpack-template#vue-router DIRECTORY_NAME

# With ESLint + Vuex + VueRouter + Jest + VTU, Add \`#jest\`.

$ npx degit ParkYoungWoong/vue3-webpack-template#jest DIRECTORY_NAME

# With ESLint + Vuex + VueRouter + Jest + VTU + Cypress, Add \`#cypress\`.

$ npx degit ParkYoungWoong/vue3-webpack-template#cypress DIRECTORY_NAME

# Start!

$ cd DIRECTORY_NAME
$ npm i
$ npm run dev
\`\`\`

## Specs

- Vue3
- Webpack
- SCSS
- Babel
- PostCSS
- Autoprefixer
- ESLint **(+ESLint)**
- Vuex **(+Vuex)**
- Vue Router **(+VueRouter)**
- Jest **(+Jest)**
- VTU(Vue Test Utils) **(+Jest)**
- Cypress **(+Cypress)**

## Packages

**webpack**: 모듈(패키지) 번들러의 핵심 패키지\n
**webpack-cli**: 터미널에서 Webpack 명령(CLI)을 사용할 수 있음\n
**webpack-dev-server**: 개발용으로 Live Server를 실행(HMR)\n

**html-webpack-plugin**: 최초 실행될 HTML 파일(템플릿)을 연결\n
**copy-webpack-plugin**: 정적 파일(파비콘, 이미지 등)을 제품(\`dist\`) 폴더로 복사\n

**sass-loader**: SCSS(Sass) 파일을 로드\n
**postcss-loader**: PostCSS(Autoprefixer)로 스타일 파일을 처리\n
**css-loader**: CSS 파일을 로드\n
**style-loader**: 로드된 스타일(CSS)을 \`<style>\`로 \`<head>\`에 삽입\n
**babel-loader**: JS 파일을 로드\n
**vue-loader**: Vue 파일을 로드\n
**vue-style-loader**: Vue 파일의 로드된 스타일(CSS)을 \`<style>\`로 \`<head>\`에 삽입\n
**file-loader**: 지정된 파일(이미지)을 로드\n

**@babel/core**: ES6 이상의 코드를 ES5 이하 버전으로 변환\n
**@babel/preset-env**: Babel 지원 스펙을 지정\n
**@babel/plugin-transform-runtime**: Async/Await 문법 지원\n

**sass**: SCSS(Sass) 문법을 해석(스타일 전처리기)\n
**postcss**: Autoprefixer 등의 다양한 스타일 후처리기 패키지\n
**autoprefixer**: 스타일에 자동으로 공급 업체 접두사(Vendor prefix)를 적용하는 PostCSS의 플러그인\n

**vue**: Vue.js 프레임워크\n
**@vue/compiler-sfc**: .vue 파일(SFC, 3버전)을 해석\n

**eslint**: 정적 코드 분석 도구 **(+ESLint)**\n
**eslint-plugin-vue**: Vue.js 코드 분석 **(+ESLint)**\n
**babel-eslint**: ES6 이상의 코드(Babel)를 분석 **(+ESLint)**\n

**vuex**: 중앙 집중식 저장소 **(+Vuex)**\n
**vue-router**: 라우터 **(+VueRouter)**\n

**jest**: 단위 테스트 도구 **(+Jest)**\n
**@vue/test-utils**: Vue.js 환경 테스트 도구 **(+Jest)**\n
**vue-jest**: \`.vue\` 파일 변환 **(+Jest)**\n
**babel-jest**: \`.js\` 파일 변환 **(+Jest)**\n

**cypress**: E2E 테스트 도구 **(+Cypress)**\n
**eslint-plugin-cypress**: Cypress용 ESLint 플러그인 **(+Cypress)**\n

## 주의사항!

\`\`\`js
console.log("Hello World!");
\`\`\`

- \`npm i vue@next\`로 설치(3버전)
- \`npm i vue-loader@next\`로 설치(3버전)
- \`npm i -D @vue/test-utils@next\`로 설치(3버전)\n
- \`npm i -D vue-jest@next\`로 설치(3버전)\n
- \`npm i -D webpack-dev-server@next\`로 설치(webpack-cli 버전(@4^)과 일치)!\n
- \`package.json\` 옵션으로 \`browserslist\` 추가!\n
- \`.postcssrc.js\` 생성(PostCSS 구성 옵션)!\n
- \`.babelrc.js\` 생성(Babel 구성 옵션)!\n
- \`.eslintrc.js\` 생성(ESLint 구성 옵션)!\n

## ESLint Auto fix on save for VSCode

- 모든 명령 표시(Windows: \`Ctrl\`+\`Shift\`+\`P\` / macOS: \`Cmd\`+\`Shift\`+\`P\`)
- 모든 명령 표시에서 \`settings\` 검색
- \`Preferences: Open Settings (JSON)\` 선택
- 오픈된 \`settings.json\`파일에서 아래 코드 추가 및 저장

\`\`\`json
{
"eslint.validate": ["vue", "javascript", "javascriptreact", "html"],
"eslint.alwaysShowStatus": true,
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
}
}
\`\`\`

# 추가내용

- vscode 확장 프로그램 ESLint 설치
- \`eslint --init\` 후 작성해놓은 .eslintrc.js 덮어씌움
- 전역패키지 npm, eslint, @vue/cli 필요
- (https://sunmon.github.io/vscode-eslint-prettier-setting/) 참조하면 좋음
