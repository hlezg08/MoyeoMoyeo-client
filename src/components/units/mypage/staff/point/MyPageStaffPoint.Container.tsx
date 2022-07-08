import Pagination01 from "../../../../commons/pagination/01/Pagination01.Container";
import * as S from "./MyPageStaffPoint.Styles";
export default function MyPageStaffPoint() {
  return (
    <S.Wrapper>
      <S.TableWrapper>
        <S.TableHead>
          <S.Row>
            <th>상품명</th>
            <th>금액</th>
            <th>잔액</th>
            <th>거래일시</th>
          </S.Row>
        </S.TableHead>
        <S.TableBody>
          {new Array(10).fill(1).map((e: any, idx: number) => (
            <S.Row key={idx}>
              <S.Column>상품이름</S.Column>
              <S.Column>10000</S.Column>
              <S.Column>10000</S.Column>
              <S.Column>2022.08.01</S.Column>
            </S.Row>
          ))}
        </S.TableBody>
      </S.TableWrapper>
      <Pagination01 />
    </S.Wrapper>
  );
}