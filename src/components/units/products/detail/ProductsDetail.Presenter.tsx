import * as S from "./ProductsDetail.Styles";
import ProductsQuestionList from "../question/list/ProductsQuestionList.Container";
import ProductsQuestionWrite from "../question/write/ProductsQuestionWrite.Container";
import { Image } from "antd";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { useRouter } from "next/router";
import BackTopAnt from "../../../commons/backTop";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import DOMPurify from "dompurify";
import Chat from "../../chat";
import { dibsProductIdState } from "../../../../commons/store";
import { useRecoilState } from "recoil";
// import io from "socket.io-client";
// const socket = io.connect("http://localhost:3001");

export default function ProductDetailUI(props: any) {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  const [dibsId] = useRecoilState(dibsProductIdState);

  return (
    <S.Wrapper>
      {/* 스크롤 할 때 생기는 네비게이션바 */}
      <S.NavWrapper ref={props.navRef}>
        <S.NavItemWrapper>
          <S.NavItem
            id="detail"
            isActive={props.activedTab === "detail"}
            onClick={props.onClickDetail}
          >
            상품정보
          </S.NavItem>
          <S.NavItem
            id="qna"
            isActive={props.activedTab === "qna"}
            onClick={props.onClickQna}
          >
            상품문의
          </S.NavItem>
        </S.NavItemWrapper>
      </S.NavWrapper>

      <S.LeftWrapper>
        <S.Title>{props.data?.fetchProduct.name}</S.Title>
        <S.ViewPickWrapper>
          <S.MobilePrice>{props.data?.fetchProduct.price}원</S.MobilePrice>
          <S.IconWrapper>
            <S.ViewIcon />
            <S.Label>{props.data?.fetchProduct.viewCount}</S.Label>
          </S.IconWrapper>
          <S.IconWrapper>
            <S.PickIcon />
            <S.Label>
              {props.data?.fetchProduct.likedUsers?.length || "0"}
            </S.Label>
          </S.IconWrapper>
        </S.ViewPickWrapper>
        <S.Line />
        <S.Label>{props.data?.fetchProduct.description}</S.Label>
        <S.Line />
        <S.Subtitle ref={props.detailRef}>상품 정보</S.Subtitle>

        {/* 이미지 */}
        <S.PreviewGroup>
          <Image.PreviewGroup>
            {props.data?.fetchProduct.images.map((el: any) => {
              return (
                <S.ImageItem
                  key={el.id}
                  src={`https://storage.googleapis.com/${el.src}`}
                />
              );
            })}
          </Image.PreviewGroup>
        </S.PreviewGroup>
        {typeof window !== "undefined" && (
          <S.DetailContents
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.data?.fetchProduct.contentSrc),
            }}
          />
        )}
        <S.Line />
        {/* 판매자 정보 */}
        <S.SellerContentsWrapper>
          <S.Label>{props.data?.fetchProduct.seller?.manager}</S.Label>
          <S.Label>{props.data?.fetchProduct.seller?.phone}</S.Label>
        </S.SellerContentsWrapper>
        <S.Line />
        {/* 상품 문의(Q&A) 작성, 조회 */}
        <S.ProductsQuestionWrapper ref={props.qnaRef}>
          <ProductsQuestionWrite />
          <ProductsQuestionList />
        </S.ProductsQuestionWrapper>
      </S.LeftWrapper>

      {/* 오른쪽 사이드바 Wrapper */}
      <S.RightWrapper>
        <S.SidebarWrapper>
          <S.Subtitle>{props.data?.fetchProduct.price}원</S.Subtitle>
          <S.BtnWrapper>
            {props.isSeller ? (
              <>
                {/* 관계자 : 수정,삭제 */}
                <S.SellerActiveBtn
                  onClick={onClickMoveToPage(
                    `/products/${router.query.productId}/edit`
                  )}
                >
                  수정하기
                </S.SellerActiveBtn>
                <S.WhiteBtn onClick={props.onClickShowConfirm}>
                  삭제하기
                </S.WhiteBtn>
              </>
            ) : (
              <>
                {/* 유저 : 찜하기,구매하기 */}
                <S.ActiveBtn
                  onClick={onClickMoveToPage(
                    `/products/${router.query.productId}/payment`
                  )}
                >
                  구매하기
                </S.ActiveBtn>
                {dibsId && (
                  <S.WhiteBtn onClick={props.onClickDibsProduct}>
                    찜하기 해제
                  </S.WhiteBtn>
                )}
                {!dibsId && (
                  <S.WhiteBtn onClick={props.onClickDibsProduct}>
                    찜하기
                  </S.WhiteBtn>
                )}
              </>
            )}
          </S.BtnWrapper>
        </S.SidebarWrapper>
      </S.RightWrapper>

      {/* BackTop(맨 위로 가기) 추가 */}
      <BackTopAnt />

      {/* 채팅 mock-up */}
      {props.clicked ? (
        <S.ChatWrapper>
          <Chat
            // socket={socket}
            onClickChat={props.onClickChat}
            username="username"
            room="1"
          />
        </S.ChatWrapper>
      ) : (
        <S.ChatIconWrapper onClick={props.onClickChat}>
          <S.ChatIcon />
        </S.ChatIconWrapper>
      )}

      {/* 모바일 화면일때는 찜하기,구매하기가 하단에 고정 */}
      <S.MobilePaymentBar>
        {props.isSeller ? (
          <>
            {/* 관계자 : 수정,삭제 */}
            <S.WhiteBtn onClick={props.onClickShowConfirm}>삭제하기</S.WhiteBtn>
            <S.SellerActiveBtn
              onClick={onClickMoveToPage(
                `/products/${router.query.productId}/edit`
              )}
            >
              수정하기
            </S.SellerActiveBtn>
          </>
        ) : (
          <>
            {/* 유저 : 찜하기,구매하기 */}

            {!dibsId && (
              <S.WhiteBtn
                onClick={props.onClickDibsProduct}
                style={{ width: "20%" }}
              >
                <FavoriteBorder />
              </S.WhiteBtn>
            )}
            {dibsId && (
              <S.WhiteBtn
                onClick={props.onClickDibsProduct}
                style={{ width: "20%" }}
              >
                <Favorite />
              </S.WhiteBtn>
            )}
            <S.ActiveBtn
              onClick={onClickMoveToPage(
                `/products/${router.query.productId}/payment`
              )}
            >
              구매하기
            </S.ActiveBtn>
          </>
        )}
      </S.MobilePaymentBar>
    </S.Wrapper>
  );
}
