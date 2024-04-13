function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  

  return (
    <div>
      <h1> page has {params?.slug?.length | 0} layers</h1>
    </div>
  );
}
//here you get a slug variable as param includes all of the url routes that is preset [...slug] will achive this
//adding [] to [..slug] will include the root folder before the slug as its own page and will render it based on 
//page.tsx file in the slug folder 
export default Docs;
