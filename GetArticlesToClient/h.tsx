export async function getStaticProps() {
  await fetch(`@/public/en/articles/linux.md`)
    .then((res) => res.text())
    .then((res) => res);
}
