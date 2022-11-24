import { useShareAppMessage } from "@tarojs/taro";

export function usePageShare() {
  useShareAppMessage(() => {
    return {
      title: "小程序测试hello-world",
      path: "/pages/index/index",
      imageUrl:
        "https://msn-img-nos.yiyouliao.com/inforec-20221124-1c95245b8d5377d5c3df13f1286586b8.jpg?time=1669279262&signature=F0394270CC9CA4591107FB9E71458723"
    };
  });
}
