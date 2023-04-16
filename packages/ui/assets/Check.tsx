import React from "react";
interface PropsType {
  size?: number;
  color?: boolean;
  onClick?: () => void;
}
export const Check = ({ size = 50, color, onClick }: PropsType) => (
  <svg
    width={size}
    height={size}
    onClick={onClick}
    viewBox="0 0 50 50"
    fill="none"
  >
    <path
      className={`${color ? "fill-green" : ""}`}
      d="M30.667 18.3128L21.7295 27.2712L18.292 23.8337C18.1052 23.6156 17.8754 23.4384 17.6169 23.3134C17.3585 23.1883 17.0769 23.1181 16.79 23.107C16.5031 23.0959 16.217 23.1443 15.9497 23.249C15.6823 23.3537 15.4395 23.5126 15.2365 23.7156C15.0335 23.9187 14.8746 24.1615 14.7698 24.4288C14.6651 24.6962 14.6168 24.9823 14.6278 25.2692C14.6389 25.5561 14.7092 25.8376 14.8342 26.0961C14.9593 26.3546 15.1364 26.5844 15.3545 26.7712L20.2503 31.6878C20.445 31.8809 20.6759 32.0337 20.9297 32.1373C21.1835 32.241 21.4553 32.2936 21.7295 32.292C22.276 32.2897 22.7998 32.0727 23.1878 31.6878L33.6045 21.2712C33.7998 21.0775 33.9548 20.8471 34.0605 20.5932C34.1663 20.3393 34.2208 20.067 34.2208 19.792C34.2208 19.517 34.1663 19.2447 34.0605 18.9908C33.9548 18.7369 33.7998 18.5065 33.6045 18.3128C33.2142 17.9248 32.6861 17.707 32.1358 17.707C31.5854 17.707 31.0573 17.9248 30.667 18.3128ZM25.0003 4.16699C20.8799 4.16699 16.852 5.38885 13.426 7.67804C9.99993 9.96724 7.32967 13.221 5.75284 17.0278C4.17602 20.8345 3.76345 25.0234 4.56731 29.0647C5.37117 33.106 7.35535 36.8181 10.2689 39.7317C13.1825 42.6453 16.8947 44.6295 20.936 45.4334C24.9772 46.2372 29.1661 45.8246 32.9729 44.2478C36.7797 42.671 40.0334 40.0007 42.3226 36.5747C44.6118 33.1487 45.8337 29.1208 45.8337 25.0003C45.8337 22.2645 45.2948 19.5554 44.2478 17.0278C43.2009 14.5001 41.6663 12.2035 39.7317 10.2689C37.7972 8.33438 35.5005 6.79981 32.9729 5.75284C30.4453 4.70586 27.7362 4.16699 25.0003 4.16699ZM25.0003 41.667C21.704 41.667 18.4817 40.6895 15.7408 38.8582C13 37.0268 10.8638 34.4238 9.60234 31.3784C8.34088 28.3329 8.01083 24.9818 8.65391 21.7488C9.297 18.5158 10.8843 15.5461 13.2152 13.2152C15.5461 10.8843 18.5158 9.29699 21.7488 8.6539C24.9818 8.01082 28.333 8.34087 31.3784 9.60233C34.4238 10.8638 37.0268 13 38.8582 15.7408C40.6895 18.4816 41.667 21.704 41.667 25.0003C41.667 29.4206 39.9111 33.6598 36.7854 36.7854C33.6598 39.911 29.4206 41.667 25.0003 41.667Z"
      fill="black"
    />
  </svg>
);
