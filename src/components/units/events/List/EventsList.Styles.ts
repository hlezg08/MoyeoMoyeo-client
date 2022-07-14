import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LineDiv = styled.div`
  width: 1rem;
  height: 100%;
  border-left: 0.63rem solid #d2d2d2;
`;

export const Date = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-top: 0.5rem;
  padding-left: 10%;
  gap: 1.5rem;
`;
interface ITabProps {
  isActive: boolean;
}
export const Tab = styled.div`
  width: 80px;
  height: 3.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.4rem;
  font-weight: ${(props: ITabProps) => (props.isActive ? "700" : "none")};
  border-bottom: ${(props: ITabProps) =>
    props.isActive ? "3px solid #ffd24c" : "none"};
  :hover {
    cursor: pointer;
  }
  @media (max-width: 767px) {
    width: 55px;
    height: 2rem;
    justify-content: center;
    margin-left: 0.3rem;
    margin-bottom: 0.63rem;
    font-size: 0.8rem;
  }
`;

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: white;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 18;
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    position: sticky;
    top: 3.4rem;
    align-items: center;
    margin-bottom: 0;
  }
`;

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const DateWrapper = styled.div`
  width: ${(props: ITabProps) => (props.isActive ? "100%" : "316px")};
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  @media (max-width: 767px) {
    display: ${(props: ITabProps) => (props.isActive ? " flex" : "none")};
  }
`;
export const FestivalWrapper = styled.div`
  width: 70%;
  display: ${(props: ITabProps) => (props.isActive ? "flex" : "none")};
  flex-direction: column;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const EventsWrapper = styled.div`
  width: 70%;
  display: ${(props: ITabProps) => (props.isActive ? "flex" : "none")};
  flex-direction: column;
  @media (max-width: 767px) {
    margin-left: 1rem;
  }
`;

export const EventsBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EventWriteBtn = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  border-radius: 10px;
  background-color: #ffd24c;
  @media (max-width: 767px) {
    width: 80px;
    height: 30px;
  }
`;