"use client";

interface FooterProps {
  data: {
    content: { description: string };
    list?: Array<any>;
    partners_certifications?: Array<{ imageUrl: string; fileUrl: string }>;
  };
}

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  return (
    <footer className="section__footer font-manrope flex flex-col items-center">
      <div className="footer__container w-full md:max-w-[1280px]">
        <div className="section__top px-14 md:px-0 flex flex-col md:flex-row text-white my-12 max-w-[800px] mx-auto text-center md:text-left">
          <img
            src="/images/logo-white.svg"
            alt="jumpp logo"
            className="h-auto w-[124px] mx-auto md:mr-7 border-b border-white-100 md:border-b-0 pb-4 md:pb-0"
          />
          <div className="w-155 pb-4 pt-4 md:pt-0">
            <div className="md:border-l pl-[26px] border-white-100 font-semibold">
              {data.content.description}
            </div>
          </div>
        </div>

        <div className="border-t border-white-500 py-14 text-white-500 text-sm text-center px-4">
          Insurance is subject matter of solicitation. Please read sales
          brochure carefully before closing as sale. <br />
          Finofin Insurance and Advisory Services pvt. Ltd, IRDA corporate
          agency COR No. CA0992, Category: Composit, Valid from 14-Nov-24 to
          13-Nov-27,
          <br />
          Registered Office - FINVASIA CENTRE, D-179, 6th FLOOR, PHASE-8B,
          Sector-74, S.A.S.Nagar (Mohali), 160055, Punjab
        </div>

        <div className="text-center text-xs text-white section__copyright items-center pl-11 py-8 md:pt-8 md:pb-5 pr-9 flex flex-col md:flex-row justify-center bg-dark-jungle-green rounded-tr-[40px] rounded-tl-[40px]">
          © 2025 Website owned and managed by: Finofin Insurance and Advisory
          Services pvt. Ltd
        </div>
      </div>
    </footer>
  );
};

export default Footer;
