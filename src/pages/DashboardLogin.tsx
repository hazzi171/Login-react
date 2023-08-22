import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const DashboardLogin: FunctionComponent = () => {
  return (
    <div className="relative bg-royalblue w-full h-[720px] overflow-hidden text-center text-base text-white font-montserrat">
      <img
        className="absolute top-[0px] left-[0px] w-[1641.5px] h-[1083px]"
        alt=""
        src="/bg.svg"
      />
      <div className="absolute top-[161px] left-[490px] w-[300px] h-[398px]">
        <div className="absolute top-[169px] left-[0px] w-[300px] h-[45px] text-[14px]">
          <div className="absolute top-[0px] left-[0px] rounded box-border w-[300px] h-[45px] border-[1px] border-solid border-white" />
          <div className="absolute top-[13px] left-[51px] leading-[20px] uppercase font-light">
            Username
          </div>
          <img
            className="absolute top-[13px] left-[12px] w-5 h-5 overflow-hidden"
            alt=""
            src="/user.svg"
          />
        </div>
        <Form.Group className="w-[300px] [border:none] bg-[transparent] absolute top-[234px] left-[0px]">
          <Form.Label>password</Form.Label>
          <Form.Control type="text" placeholder="Input placeholder" />
        </Form.Group>
        <div className="absolute top-[322px] left-[0px] w-[300px] h-[45px] text-royalblue">
          <input
            className="[border:none] bg-white absolute top-[0px] left-[0px] rounded shadow-[0px_4px_4px_rgba(0,_0,_0,_0.3)] w-[300px] h-[45px]"
            type="text"
          />
          <div className="absolute top-[13px] left-[123px] leading-[20px] uppercase font-semibold">
            login
          </div>
        </div>
        <div className="absolute top-[378px] left-[154px] font-medium">
          Forgot password?
        </div>
        <img
          className="absolute h-[25.44%] w-[41.05%] top-[-0.47%] right-[29.58%] bottom-[75.04%] left-[29.37%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
      </div>
    </div>
  );
};

export default DashboardLogin;
