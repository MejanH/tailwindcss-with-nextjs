import Head from "next/head";

export default function Home() {
  return (
    <div className="prose max-w-none w-3/4 mx-auto mt-10">
      <Head>
        <title>TailwindCSS with Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Creating a project with TailwindCSS, NextJS & Typography</h1>
      <p>
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        Adipiscing, elit feugiat tortor parturient natoque curabitur fusce,
        penatibus consequat vestibulum odio eros. Nisl suspendisse cras tortor
        pellentesque molestie aenean tempor lectus nec vestibulum arcu vel,
        <blockquote>
          {" "}
          turpis in leo facilisis fermentum ac platea luctus justo sem.
        </blockquote>
        Orci eleifend nisl vel hendrerit justo habitasse dictum inceptos augue
        rhoncus duis blandit vulputate nostra, felis parturient fringilla
        conubia platea integer non scelerisque venenatis varius cubilia nullam
        porta.
        <pre>
          <code>
            {`
              module.exports = {
                theme: {
                  // ...
                },
                plugins: [
                  require('@tailwindcss/typography'),
                  // ...
                ],
              }
            `}
          </code>
        </pre>
        Ridiculus vel tincidunt sapien ultricies penatibus nulla integer et
        varius, eros proin mus odio eget cubilia quisque rhoncus ultrices,
        feugiat semper porta iaculis fames ligula parturient non.
      </p>
    </div>
  );
}
