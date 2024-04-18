import LogoTitle from "@/components/UI/LogoTitle";
import PageContainer from "@/components/Pages/Auth/PageContainer";
import useAuthStore from "@/stores/auth.store";
import BlueButton from "@/components/UI/Buttons/BlueButton";

const VerifyNewAccountEmail = () => {
  const setShowVerifyEmail = useAuthStore((state) => state.setShowVerifyEmail);

  const handleBack = () => {
    setShowVerifyEmail(false);
  };
  return (
    <PageContainer className="gap-[30px]">
      <LogoTitle />
      <p className="text-black font-extralight leading-[140%] max-w-[358px] text-center mb-[49px] mt-[52px]">
        Ми надіслали вам електронний лист. Перевірте вашу пошту щоб підтвердити
        реєстрацію
      </p>
      <BlueButton onClick={handleBack}>Назад</BlueButton>
    </PageContainer>
  );
};

export default VerifyNewAccountEmail;
