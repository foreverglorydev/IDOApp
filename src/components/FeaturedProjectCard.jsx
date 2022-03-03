// interface FeaturedProject {
//   title: string
//   avatar: string
//   testimonial: string
// };

const p1 = {
  title: 'jdlandacping',
  avatar: 'joe',
  testimonial: 'nice project',
};

const p2 = {
  title: 'jdlandacping',
  avatar: 'joe',
  testimonial: 'nice project',
};

const p3 = {
  title: 'jdlandacping',
  avatar: 'joe',
  testimonial: 'nice project',
};

const p4 = {
  title: 'jdlandacping',
  avatar: 'joe',
  testimonial: 'nice project',
};

const p5 = {
  title: 'jdlandacping',
  avatar: 'joe',
  testimonial: 'nice project',
};

export const FeaturedProjects = [p1, p2, p3, p4, p5];
export const FeaturedProjectCard = (title, avatar, testimonial) => {
  return (<div className="outline-1 w-200 h-120 border-2 border-green4 rounded-lg bg-gray1 opacity-40 mx-20">
  </div>
  );
};

