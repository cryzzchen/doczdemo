import { css } from 'docz-plugin-css';

const config = {
    src: './',  // 路径、
    // dest: '.docz/dist', // 生成的文档路径
    files: '**/*.mdx',
    // base: '/hualuo/',    // 前缀
    title: 'hualuoDoc',
    description: '描述',
    typescript: true,  // 是否会引入ts
    propsParser: true,
    plugins: [
        css({
            preprocessor: 'sass',
            cssmodules: true,
        })
    ]
}

export default config;