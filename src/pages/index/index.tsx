import { View, Text } from "@tarojs/components";
import { useShareAppMessage } from "@tarojs/taro";
import { usePageShare } from "./useShareMenu";
import "./index.less";

export default function Index() {
  // 不可以用
  // usePageShare();

  // 可以用 （测试不可用的时候把下面的代码注释掉，上面的代码打开）
  useShareAppMessage(() => {
    return {
      title: "小程序测试hello-world",
      path: "/pages/index/index",
      imageUrl:
        "https://msn-img-nos.yiyouliao.com/inforec-20221124-1c95245b8d5377d5c3df13f1286586b8.jpg?time=1669279262&signature=F0394270CC9CA4591107FB9E71458723"
    };
  });

  return (
    <View className="index">
      <Text>Hello world!</Text>
    </View>
  );
}
