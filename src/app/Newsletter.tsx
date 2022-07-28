import { component$ } from '@builder.io/qwik';

export const Newsletter = component$(() => {
  return <div class="border-2 p-6 max-w-3xl shadow-md space-y-5">
    <h2 class="text-3xl mb-12">Sign up to <strong>Qwikly</strong>, the weekly Qwik newsletter 😊</h2>

    <form action="https://hirez76447.activehosted.com/proc.php" method="post">

    <input type="hidden" name="u" value="3" />
    <input type="hidden" name="f" value="3" />
    <input type="hidden" name="s" />
    <input type="hidden" name="c" value="0" />
    <input type="hidden" name="m" value="0" />
    <input type="hidden" name="act" value="sub" />
    <input type="hidden" name="v" value="2" />
    <input type="hidden" name="or" value="f4f19274bee0ea2b37ebc1904ca7e505" />

    <input class="shadow border border-blue-500 text-lg placeholder-gray-700  rounded p-3 mr-4 focus:outline-none focus:border-gray-500" type="email"
        placeholder="Your Email" required name="email"/>
    
      <button type="submit" class="button bg-blue-600 text-lg py-3 px-6 font-bold text-white rounded shadow hover:bg-blue-700">Subscribe</button>
      </form>
  </div>
});