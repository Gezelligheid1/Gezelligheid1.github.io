<template>
    <nav class="navbar">
        <a href='' class="navbar-brand">Pedestrian1</a>
        <ul class="navbar-nav">
            <li :class="{ active: activeSection === 'Home' }" @click="scrollTo('section-Home')">
                Home
            </li>
            <li :class="{ active: activeSection === 'Work' }" @click="scrollTo('section-Work')">
                Work
            </li>
            <li :class="{ active: activeSection === 'Internship' }" @click="scrollTo('section-Internship')">
                Internship
            </li>
            <li :class="{ active: activeSection === 'Competition' }" @click="scrollTo('section-Competition')">
                Competition
            </li>
        </ul>
        <el-icon class="first-icon">
            <a href="https://github.com/Gezelligheid1">
                <img src="images/github-mark.svg" width="25px">
            </a>
            <a href="https://gezelligheid1.github.io">
                <img src="images/blog.svg" class="blog-icon">
            </a>
        </el-icon>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const activeSection = ref('Home');

const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
        window.scrollTo({
            top: section.offsetTop - 60, // App.vue中的margin-top: 60px;
            behavior: 'smooth',
        });
    }
};

const checkActiveSection = () => {
    const sections = ['Home', 'Work', 'Internship', 'Competition'];
    // const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust as needed
    const scrollPosition = window.scrollY; // Adjust as needed

    for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(`section-${sections[i]}`);
        if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            activeSection.value = sections[i];
            break;
        }
    }
};

onMounted(() => {
    window.addEventListener('scroll', checkActiveSection);
    checkActiveSection(); // Initial check
});

onUnmounted(() => {
    window.removeEventListener('scroll', checkActiveSection);
});
</script>
  
<script>
export default {
    name: "NavigationBar"
}
</script>
  
<style scoped>
.navbar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    /* 背景颜色 */
    /* color: black; */
    /* 文字颜色 */
    /* 内边距 */
    position: fixed;
    /* 固定在页面顶部 */
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    /* 确保导航栏位于页面内容之上 */
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    /* 底部阴影 */
    height: 10%;
}

.navbar-brand {
    margin-left: 8.5%;
    color: black;
    /* Logo文字颜色 */
    text-decoration: none;
    /* 移除下划线 */
    font-size: 24px;
    /* 字体大小 */
    font-weight: normal;
}

.navbar-nav {
    list-style: none;
    /* 移除列表样式 */
    display: flex;
    /* 使列表项水平排列 */
    gap: 20px;
    /* 列表项之间的间隔 */
}

.navbar-nav a {
    color: black;
    /* 链接文字颜色 */
    text-decoration: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

.first-icon {
    margin-left: 50%;
}

.blog-icon {
    width: 48px;
    margin-left: 10px;
}

.navbar li {
    cursor: pointer;
    /* Add other styles as needed */
}

.navbar li.active {
    box-shadow: 0 4px 2px -2px rgb(0, 132, 255);
}
</style>