<template>
  <div id="projects" class="wrapper">
    <div class="static-container">
      <TextBlock>
        <div class="about-grid">
        <h2>Projects</h2>
          <div class="columns project">
            <ul>
              <li v-for="(project, i) in projects.projects" :key="i">
                <img :src="project.image" :alt="project.about.description" class="project-image" /> <br />
                {{ project.about.company }} - {{ project.about.description }}<br />
                <strong>Stack:</strong> {{ project.stacks.join(', ') }}<br />
                <a :href="project.link" target="_blank">Link</a>
              </li>
            </ul>
          </div>
        </div>
      </TextBlock>
    </div>
  </div>
</template>

<script>
import TextBlock from '@/components/TextBlock.vue';
import { fetchProjects } from '~/utils';

export default {
  components: {
    TextBlock
  },
  data() {
    return {
      projects: []
    };
  },
  async mounted() {
      this.projects = await fetchProjects()
    },
    methods: {
      
    },
};
</script>

<style lang="scss">
  .about-grid{
    padding: 3rem 2rem 0 0;
    margin-right: -25vw;
    width: 75vw;
    h2 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    .columns {
      margin-bottom: 2rem;
    }

    ul {
      display: grid;
      grid-template: 1fr / repeat(4, 1fr);
      grid-gap: 2rem;
      grid-row-gap: 1rem;
    }

    li {
      list-style: none;
      margin: 0;
      font-size: 1rem;
      line-height: 1.5em;
      color: var(--gray);
    }

    .project-image {
        width: 100%;
        height: 30vh;
    }

    .tools {
      display: grid;
      grid-template: 1fr / repeat(4, 1fr);
      grid-gap: 2rem;
      grid-row-gap: 1rem;

      ul {
        display: block;
      }
    }

    @media screen and (max-width: 1024px) {
      padding: 3rem 1rem 0 0;
      margin: 0;
      width: calc(100vw - 4rem);
    }

    @media screen and (max-width: 768px) {
      ul {
        grid-template: 1fr / repeat(3, 1fr);
      }

      .tools {
        grid-template: 1fr / repeat(3, 1fr);

        ul {
          display: block;
        }
      }
    }

    @media screen and (max-width: 568px) {
      ul {
        grid-template: 1fr / 1fr;
        grid-gap: 1rem;
      }

      .tools {
        grid-template: 1fr / 1fr;
        grid-gap: 1rem;

        ul {
          display: block;
        }
      }
    }
  }
</style>