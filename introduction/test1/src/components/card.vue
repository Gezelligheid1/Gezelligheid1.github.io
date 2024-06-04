<template>
    <el-card class="box-card">
        <div class="content-wrapper">
            <div class="icon-section">
                <!-- 使用Element Plus图标 -->
                <el-icon class="icon">
                    <!-- <img src="Tencent_EN.svg"> -->
                    <img :src="image_path">
                </el-icon>
            </div>
            <!-- 图标右侧的三行内容 -->
            <div class="upper-text">
                <!-- <div class="text-row title">Infrastructure Developer</div>
                <div class="text-row company">Tencent Weixin Group (WXG)</div>
                <div class="text-row time">2024.1 - 2024.3</div> -->
                <div class="text-row title">{{ title }}</div>
                <div class="text-row company">{{ company }}</div>
                <div class="text-row time">{{ time }}</div>
            </div>
            <!-- 图标下方的若干行内容 -->
            <div class="additional-content">
                <!-- <div>Storage, Leveldb, Libco</div> -->
                <div v-for="entry in contents" :key="entry.content">{{ entry.content }}</div>
                <!-- 可以继续添加更多内容 -->
            </div>
        </div>
    </el-card>
</template>

<script>
export default {
    name: 'VueCard',
    // data() {
    //     return {
    //         title: 'Infrastructure Developer',
    //         company: 'Tencent WXG',
    //         time: '2024.1 - 2024.3',
    //         contents: [{ content: 'Storage, Leveldb, Libco' }],
    //         image_path: 'images/Tencent_EN.svg'
    //     };
    // }
}
</script>
  
<script setup>
import { ElCard, ElIcon } from 'element-plus';
import { defineProps } from 'vue';
defineProps({
    title: String,
    company: String,
    time: String,
    image_path: String,
    contents: Array
});
</script>
  
<style scoped>
.box-card {
    width: 100%;
    min-width: 500px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    /* 相对定位作为图标绝对定位的参照 */
    padding: 2px;
    /* 给内容区域添加内边距 */
    padding-left: 10px;
    /* 确保左侧有足够空间放置图标 */
    margin-bottom: 10px;
}

.content-wrapper {
    position: relative;
    /* 相对定位 */
}

.icon-section {
    position: absolute;
    /* 绝对定位 */
    top: 2px;
    /* 距离顶部20px */
    left: 2px;
    /* 距离左边20px */
}

.icon {
    font-size: 60px;
    color: #409EFF;
}

.upper-text {
    margin-left: 90px;
    text-align: left;
    margin-bottom: 20px;
    /* 与附加内容的间隔 */
}

.text-row {
    margin-bottom: 5px;
}

.title {
    font-size: 20px;
    font-weight: bold;
    color: #333;
}

.company {
    font-size: 16px;
    color: #666;
}

.time {
    font-size: 14px;
    color: #999;
}

.additional-content {
    padding-left: 20px;
    /* 调整以与图标中心对齐 */
    border-left: 2px solid #409EFF;
    /* 左侧边线 */
    margin-left: 15px;
    /* 与图标左边距相同 */
}

.additional-content div {
    text-align: left;
    padding: 4px 0;
}
</style>