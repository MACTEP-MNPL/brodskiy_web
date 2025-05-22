"use client";
import { BOT_URL } from "@/shared/const/urls";
import axios from "axios";
import { HTMLInputTypeAttribute, useEffect, useState } from "react";
import { RegisterOptions, useForm } from "react-hook-form";

interface IPayloadConnectionForm {
  user_email: string;
  user_phone: string;
  user_telegram: string;
}

const mailReg =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const phoneReg = /^(\+|)(7|8)( |)\d{3}( |)\d{3}( |)(\d{2}( |)){2}$/;

const tgReg = /.*\B@(?=\w{2,64}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.*/;

export const sendNotification = async (payload: IPayloadConnectionForm) => {
  try {
    const { data } = await axios.post<IPayloadConnectionForm>(
      BOT_URL || "",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return data;

    /*eslint-disable*/
    // @ts-ignore
  } catch (e) {
    return false;
  }
};
export function ConnectionForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IPayloadConnectionForm>({
    mode: "onChange",
  });

  const onSubmit = async (data: IPayloadConnectionForm) => {
    setIsLoading(true);
    const res = await sendNotification(data);
    if (res) {
      reset();
      setIsLoading(false);
      setIsSuccess(true);
    } else {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timeoutError = setTimeout(() => {
      setIsError(false);
      return () => {
        clearTimeout(timeoutError);
      };
    }, 2000);
  }, [isError]);

  useEffect(() => {
    const timeoutSucces = setTimeout(() => {
      setIsSuccess(false);
      return () => {
        clearTimeout(timeoutSucces);
      };
    }, 2000);
  }, [isSuccess]);

  return (
    <form
      className="flex flex-col w-full max-w-[525px] gap-y-[32px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        disabled={isLoading}
        type="email"
        name="user_email"
        register={register}
        error={errors.user_email?.message || ""}
        label="E-mail"
        placeholder="example@mail.com"
        options={{
          required: { value: true, message: "Заполните обязательное поле" },
          pattern: {
            value: mailReg,
            message: "Коректный email example@mail.ru",
          },
        }}
      />
      <InputField
        disabled={isLoading}
        type="text"
        name="user_telegram"
        register={register}
        error={errors.user_telegram?.message || ""}
        label="Telegram"
        placeholder="@example"
        options={{
          required: { value: true, message: "Заполните обязательное поле" },
          minLength: { value: 6, message: "Минимум 5 символов" },
          pattern: {
            value: tgReg,
            message: "Коректный telegram @example",
          },
        }}
      />
      <InputField
        disabled={isLoading}
        type="number"
        name="user_phone"
        register={register}
        error={errors.user_phone?.message || ""}
        label="Телефон"
        placeholder="+"
        options={{
          required: { value: true, message: "Заполните обязательное поле" },
          pattern: {
            value: phoneReg,
            message: "Коректный телефон +7999887766",
          },
        }}
      />
      <button
        disabled={isLoading}
        className="px-[33px] mdPlus:self-start self-center w-fit disabled:text-WHITE_500 transition-colors duration-200 disabled:bg-BLACK_250 py-[14px] text-[14px] whitespace-nowrap lg:hover:shadow-lg active:shadow-lg leading-[20px] font-semibold relative z-30 rounded-[20px] bg-GRIN_500 text-black"
      >
        {isSuccess
          ? "Заявка оптправлена"
          : isError
            ? "Ошибка отправки формы"
            : "Оставить заявку"}
      </button>
    </form>
  );
}

interface IInputField {
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  name: string;
  options: RegisterOptions<IPayloadConnectionForm>;
  /*eslint-disable*/
  // @ts-ignore
  register: eny;
  error: string;
  disabled: boolean;
  animation?: string;
}

function InputField({
  label,
  type = "text",
  placeholder = "",
  error,
  name,
  options,
  register,
  disabled,
}: IInputField) {
  return (
    <div className="relative w-full">
      <label className="flex flex-col gap-[6px]">
        <span className="text-left text-WHITE_600 text-[16px] leading-[20px] font-medium">
          {label}
        </span>
        <input
          placeholder={placeholder}
          disabled={disabled}
          type={type}
          {...register(name, options)}
          className="placeholder:text-GRAY_800 outline-none text-[16px] font-medium border-[1px] border-GRAY_700 bg-BLACK_200 rounded-[16px] min-h-[40px] px-[20px] text-GRAY_800 transition-colors duration-200"
        />
      </label>
      {error ? (
        <span className="absolute bottom-[-20px] text-nowrap whitespace-nowrap left-0 text-GRAY_800 text-[12px] font-medium">
          {error}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
