import { component$, JSXNode } from '@builder.io/qwik';
import { DiscordLogo } from './logos/DiscordLogo';
import { FacebookLogo } from './logos/FacebookLogo';
import { LinkedInLogo } from "./logos/LinkedInLogo";
import { QwikLogo } from './logos/QwikLogo';
import { Newsletter } from './Newsletter';

interface CommunityItem{
  url: string;
  title: string;
  logoComponent?: JSXNode
}

export const App = component$(() => {

  const LocalFacebookLogo = <FacebookLogo class="h-6 w-6"/>;

  const mainCommunityItems: CommunityItem[] = [
    {
      url: 'https://www.facebook.com/groups/qwikdevs',
      title: 'Qwik Developers Facebook Group',
      logoComponent: LocalFacebookLogo
    },
    {
      url: 'https://www.linkedin.com/groups/12677766',
      title: 'Qwik Developers LinkedIn Group',
      logoComponent: <LinkedInLogo class="h-6 w-6" /> 
    },
    {
      url: 'https://discord.com/invite/bNVSQmPzqy',
      title: `Builder.io's Official Qwik Discord`,
      logoComponent: <DiscordLogo class="h-6 w-6" /> 
    }
  ];

  const globalCommunityItems: CommunityItem[] = [
    {
      url: 'https://www.facebook.com/groups/qwikisrael',
      title: 'Qwik Israel Facebook Group',
      logoComponent: LocalFacebookLogo
    }
  ];

  return <div>
    <div class="bg-blue-200 px-12 py-8 flex flex-row align-bottom">
      <div class="w-24">
        <QwikLogo/>
      </div>
      <h1 class="text-4xl font-bold my-auto pb-3 pl-4 md:text-6xl">Qwik Community</h1>
    </div>
    <div className="p-12">

      
      <Newsletter class="mb-16"/>
      

      <section class="mb-12 flex flex-col space-y-5">

        <h2 className="text-3xl underline">Join Our Main Communities:</h2>
        
        <ul class="pt-5 flex flex-col space-y-6 text-lg">

          {
            mainCommunityItems.map(item => (
              <li class="flex flex-row space-x-3">
                {item?.logoComponent}
                <a class="text-blue-600 hover:underline" href={item.url} target="_blank" rel="noopener">{ item.title}</a>
              </li>
              )
            )
          }
          
        </ul>
        
      </section>

      <section class="flex flex-col space-y-5">
        <h2 className="text-3xl underline">Global Communities:</h2>
        <ul class="pt-5 flex flex-col space-y-6 text-lg">
          {
            globalCommunityItems.map(item => (
              <li class="flex flex-row space-x-3">
                {item?.logoComponent}
                <a class="text-blue-600 hover:underline" href={item.url} target="_blank" rel="noopener">{ item.title}</a>
              </li>
              )
            )
          }
        </ul>
      </section>
      
    </div>
  </div>
});