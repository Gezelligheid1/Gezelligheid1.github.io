<template>
    <div>
        <nav class="navbar">
            <ul>
                <li :class="{ active: activeSection === 'Home' }" @click="scrollTo('section-Home')">A</li>
                <li :class="{ active: activeSection === 'Work' }" @click="scrollTo('section-Work')">B</li>
                <li :class="{ active: activeSection === 'Internship' }" @click="scrollTo('section-Internship')">C</li>
                <li :class="{ active: activeSection === 'Competition' }" @click="scrollTo('section-Competition')">D</li>
            </ul>
        </nav>

        <section id="section-Home" class="section">Section A</section>
        <section id="section-Work" class="section">Section B</section>
        <section id="section-Internship" class="section">Section C</section>
        <section id="section-Competition" class="section">Section D</section>
    </div>
</template>
  
<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    setup() {
        const activeSection = ref('Home');

        const scrollTo = (sectionId) => {
            const section = document.getElementById(sectionId);

            if (section) {
                window.scrollTo({
                    top: section.offsetTop,
                    behavior: 'smooth',
                });
            }
        };

        const checkActiveSection = () => {
            const sections = ['Home', 'Work', 'Internship', 'Competition'];
            const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust as needed

            for (let i = 0; i < sections.length; i++) {
                const section = document.getElementById('section-' + sections[i]);
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

        return { activeSection, scrollTo };
    },
};
</script>

<style scoped>
.navbar ul {
    position: fixed;
    display: flex;
    list-style-type: none;
    /* Add other styles as needed */
}

.navbar li {
    cursor: pointer;
    padding: 10px;
    /* Add other styles as needed */
}

.navbar li.active {
    box-shadow: 0 4px 2px -2px blue;
}

.section {
    height: 100vh;
    /* Set the height to make sure each section is large enough to scroll */
    /* Add other styles as needed */
}
</style>