import { Cta } from '@/component/Cta';
import { Hero } from '@/component/Hero';
import { HowToUse } from '@/component/HowToUse';
import { PageHeader } from '@/component/PagaHeader';
import { PageFooter } from '@/component/PageFooter';
import { Solution } from '@/component/Solution';
import { Task } from '@/component/Task';

const Home: React.FC = () => (
  <>
    <PageHeader />
    <Hero />
    <Task />
    <Solution />
    <HowToUse />
    <Cta />
    <PageFooter />
  </>
);

export default Home;
