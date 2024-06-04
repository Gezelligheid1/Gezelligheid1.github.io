<template>
    <NavigationBar />
    <section id="section-Home">
        <el-row class="odd-row">
            <el-col :span="24">
                <div class="common-layout">
                    <el-container>
                        <div class="avatar-layout"><img src="images/avatar.jpg" width="200px"></div>
                        <el-main>
                            <div class="head">Pedestrian1</div>
                            <el-container class="education-container">
                                <div class="education-block">
                                    <el-container>
                                        <el-header style="align-content: center;">
                                            <div class="education-title">Education</div>
                                        </el-header>
                                        <el-container style="margin-left:50px">
                                            <div class="education-icon">
                                                <el-icon>
                                                    <img src="images/hdu.webp" width="40px">
                                                </el-icon>
                                            </div>
                                            <el-container>
                                                <div class="graduation-content">
                                                    <div class="text-row school">Hangzhou Dianzi University</div>
                                                    <div class="text-row education-content">
                                                        Bachelor of Engineering, Computer Science and Technology
                                                    </div>
                                                    <div class="text-row time">2020.9-2024.6</div>
                                                </div>
                                            </el-container>
                                        </el-container>
                                    </el-container>
                                </div>
                            </el-container>
                        </el-main>
                    </el-container>
                </div>
            </el-col>
        </el-row>
    </section>
    <section id="section-Work">
        <el-row class="even-row">
            <el-col :span="24">
                <div class="common-layout">
                    <el-container>
                        <el-aside class="title-block">
                            <div class="title-content">Work Experience</div>
                        </el-aside>
                        <el-main style="margin-left:20%">
                            <el-container>
                                <VueCard :title="'Infrastructure Developer'" company='Tencent WXG' time='2024.7 - Present'
                                    :contents="[{ content: 'Unknown' }]" image_path='images/Tencent_EN.svg' />
                            </el-container>
                        </el-main>
                    </el-container>
                </div>
            </el-col>
        </el-row>
    </section>
    <section id="section-Internship">
        <el-row class="odd-row">
            <el-col :span="24">
                <div class="common-layout">
                    <el-container>
                        <el-aside class="title-block">
                            <div class="title-content">Internship Experience</div>
                        </el-aside>
                        <el-main style="margin-left:20%">
                            <div>
                                <VueCard :title="'Infrastructure Developer'" company='Tencent WXG' time='2024.1 - 2024.3'
                                    :contents="[{ content: 'Storage, Leveldb, Libco' }]"
                                    image_path='images/Tencent_EN.svg' />
                            </div>
                            <div>
                                <VueCard :title="'Software Developer'" company='Huawei' time='2023.7 - 2023.10'
                                    :contents="[{ content: 'Improve HDC tools' }]" image_path='images/Huawei.svg' />
                            </div>
                            <div>
                                <VueCard :title="'Backend Developer'" company='DolphinDB' time='2023.5 - 2023.7'
                                    :contents="[{ content: 'QuantLib plugin' }]" image_path='images/DolphinDB.svg' />
                            </div>
                        </el-main>
                    </el-container>
                </div>
            </el-col>
        </el-row>
    </section>
    <section id="section-Competition">
        <el-row class="even-row">
            <el-col :span="24">
                <div class="common-layout">
                    <el-container>
                        <el-aside class="title-block">
                            <div class="title-content">Competition</div>
                        </el-aside>
                        <el-main style="margin-left:12%">
                            <div>
                                <VueCompetitionCard
                                    :title="'Silver Medal, The 46th ACM-ICPC Asia Shanghai Regional Programming Contest'"
                                    time='2021.11.27' image_path='images/icpc.svg' />
                            </div>
                            <div>
                                <VueCompetitionCard
                                    :title="'Silver Medal, The 47th ACM-ICPC Asia Jinan Regional Programming Contest'"
                                    time='2022.11.28' image_path='images/icpc.svg' />
                            </div>
                            <div>
                                <VueCompetitionCard
                                    :title="'Gold Medal, The 20th ACM-ICPC Zhejiang Provincial Collegiate Programming Contest'"
                                    time='2023.4.15' image_path='images/icpc.svg' />
                            </div>
                        </el-main>
                    </el-container>
                </div>
            </el-col>
        </el-row>
    </section>
    <el-row class="last-row">
        <el-col :span="24">
            <div class="last-row-content">
                © 2024
                <img src="images/love.png" width="13px" class="love-position">
                Gezelligheid1 Pedestrian1
            </div>
        </el-col>
    </el-row>
</template>
  

<style scoped>
.title-block {
    margin-left: 7%;
    width: 230px;
}

.title-content {
    font-size: 40px;
    color: #333;
    margin: 20px 0;
}

.text-row {
    margin-bottom: 2px;
}

.school {
    font-size: 20px;
    font-weight: bold;
    color: #333;
}

.education-content {
    font-size: 16px;
    color: #333;
}

.time {
    font-size: 14px;
    color: #999;
}

.education-title {
    font-size: 30px;
    font-weight: bold;
    color: #333;
}

.graduation-content {
    padding-left: 0px;
}

.education-icon {
    margin-top: 15px;
    margin-right: 20px;
}

.education-block {
    text-align: left;
}

.education-container {
    display: flex;
    justify-content: flex-start;
}

.odd-row {
    padding-top: 40px;
    padding-bottom: 50px;
    background-color: rgba(255, 255, 255, 0.95);
}

.even-row {
    padding-top: 40px;
    padding-bottom: 50px;
    background-color: rgba(245, 245, 245, 0.95);
}

.last-row {
    padding-top: 50px;
    padding-bottom: 35px;
}

.last-row-content {
    text-align: center;
    font-size: 14px;
    color: #999;
}

.head {
    padding-left: 20px;
    font-size: 40px;
    /* font-weight: bold; */
    color: #333;
    font-family: 'montserrat', sans-serif;
}

.avatar-layout {
    margin-left: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.love-position {
    transform: translateY(1px);
    /* 调整这个值来下移图片 */
}
</style>
  
<script setup>
import { ElContainer, ElMain, ElAside, ElHeader } from 'element-plus'
</script>

<script>
import VueCompetitionCard from './competition_card.vue';
import VueCard from './card.vue';
import NavigationBar from './navbar.vue';
export default {
    name: 'VueMain',
    components: {
        VueCard,
        VueCompetitionCard,
        NavigationBar
    }
}
</script>