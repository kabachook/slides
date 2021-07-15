import { defineAppSetup } from '@slidev/types'
import { Confetti } from 'vue-confetti';

export default defineAppSetup(({ app, router }) => {
  app.use({
    install(app, options) {
      app.config.globalProperties.$confetti = new Confetti(options)
    }
  });
})
