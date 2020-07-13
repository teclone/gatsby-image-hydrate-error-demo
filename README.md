# Investigating why gatsby build completely repaints whole page during/after hydration.

This is a minimal gatsby setup to reproduce what I notiiced while working on a gatsby project. I noticed that the whole page repaints after gatsby hydration had completed.

This looks weird, as if there is another state call happening somewhere above the hierrachy.

## Steps to reproduce

1. Clone the project and yarn install.

2. build the project and run a performance tooling locally

   ```bash
   yarn serve; // builds and the starts the application at `http://localhost:9000`
   ```

3. on chrome, open devtools, switch to performance tab and run a profile.

4. observe the frames, you will see that image the dissappeared and reappeared at some point.

   To prove that the image disappeared only after hydration had taken place, I had to render two images, one renders at the server, another renders after mount.

   By inspecting the frame screenshots, you will observe that the second image also rendered, then dissappeared, and then loaded again.
