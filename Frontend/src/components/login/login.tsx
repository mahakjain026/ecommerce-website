"use client";
import { Banner } from "../banner/banner";
import { Header } from "../header";
import SideImage from "../../../public/assets/sideimage";
import { InputField } from "../common/validationform/inputField";
import { Footer } from "../footer/footer";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserSchema } from "../common/validationform/schema";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "../ui/button";
import Link from "next/link";
import { mapLocaleToMeaningfulFormat } from "../utils/i18n";
import { map } from "zod";

interface FormData {
  Email: string;
  Password: string;
}

export const LogIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
    mode: 'all'
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => console.log(data);

  return (
    <section>
      <Banner />
      <Header />
      <hr className="mt-6" />
      <section className="flex mt-14">
        <SideImage />
        <section className="content-center ml-32 my-32">
          <section className="mb-12">
            <section>
              <h1 className="text-4xl mb-6">{mapLocaleToMeaningfulFormat().loginYourAccount}</h1>
            </section>
            <section>
              <p className="text-base">{mapLocaleToMeaningfulFormat().enterYourDetailsBelow}</p>
            </section>
          </section>

          <section>
            <form
              className="flex flex-col content-between flex-wrap gap-y-10 mb-10"
              onSubmit={handleSubmit(onSubmit)}
            >
              <section className="w-full">
                <InputField register={register}
                  type="Email"
                  placeholder="Email or Phone Number"
                  className="p-1 border-round"
                  errors={errors}
                />
              </section>
              <section>
                <InputField register={register}
                  type="Password"
                  placeholder="Password"
                  className="p-1 border-round"
                  errors={errors}
                />
              </section>

              <section className="flex space-between">
                <section>
                  <Button
                    className="bg-[#DB4444] text-[#FAFAFA] py-4 text-[16px]"
                    type="submit"
                  ><Link href="/Home">{mapLocaleToMeaningfulFormat().login}</Link></Button>
                </section>
                <section>
                  <Button className="bg-white text-[#DB4444]">{mapLocaleToMeaningfulFormat().forgotPassword}</Button>
                </section>
              </section>
            </form>
          </section>
        </section>
      </section>
      <Footer />
    </section>
  );
};
