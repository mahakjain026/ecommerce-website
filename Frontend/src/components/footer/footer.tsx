import { Input } from "@/components/ui/input";
import SendButton from "../../../public/assets/sendbutton"
import { mapLocaleToMeaningfulFormat } from "../utils/i18n";

export const Footer = () => {
  return (
    <section className=" bg-black text-white">
      <section className="mx-36 pt-36 pb-32 flex justify-between gap-x-20">
        <section className="w-52">
          <h1 className="text-2xl mb-6 font-bold">${mapLocaleToMeaningfulFormat().exclusive}</h1>
          <h1 className="text-xl mb-6">${mapLocaleToMeaningfulFormat().subscribe}</h1>
          <p className="mb-4">${mapLocaleToMeaningfulFormat().Get10offYourFirstOrder}</p>
          <section className="flex relative border-2 rounded border-white">
            <input
              className="bg-black text-white w-full pr-10 pl-2 py-2"
              type="email"
              placeholder="Enter your email"
            />
            <SendButton className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black fill-current" />
          </section>
        </section>

        <section className="w-44">
          <h1 className="text-xl mb-6">{mapLocaleToMeaningfulFormat().support}</h1>
          <p className="mb-4">{mapLocaleToMeaningfulFormat().BijoysaraniDhakaDH1515Bangladesh}</p>
          <p className="mb-4">{mapLocaleToMeaningfulFormat().exclusivegmailcom}</p>
          <p>{mapLocaleToMeaningfulFormat().phoneNumber}</p>
        </section>
        <section>
          <h1 className="text-xl mb-6">{mapLocaleToMeaningfulFormat().account}</h1>
          <p className="mb-4">{mapLocaleToMeaningfulFormat().myAccount}</p>
          <p className="mb-4">{mapLocaleToMeaningfulFormat().register}</p>
          <p className="mb-4">{mapLocaleToMeaningfulFormat().cart}</p>
          <p className="mb-4">{mapLocaleToMeaningfulFormat().wishList}</p>
          <p>{mapLocaleToMeaningfulFormat().shop}</p>
        </section>
        <section>
          <h1 className="text-xl mb-6">{mapLocaleToMeaningfulFormat().quickLink}</h1>
          <p className="mb-4">{mapLocaleToMeaningfulFormat().privacyPolicy}</p>
          <p className="mb-4">{mapLocaleToMeaningfulFormat().termsOfUse}</p>
          <p className="mb-4">{mapLocaleToMeaningfulFormat().faq}</p>
          <p>{mapLocaleToMeaningfulFormat().contact}</p>
        </section>
        <section>
          <h1 className="text-xl mb-6">{mapLocaleToMeaningfulFormat().downloadApp}</h1>
          <p >{mapLocaleToMeaningfulFormat().save$3withAppNewUserOnly}</p>
        </section>
      </section>
    </section>
  );
};
