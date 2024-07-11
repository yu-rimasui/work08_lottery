import React from "react";

const UserPage = (props) => {
  const { numbers } = props;
  if (!numbers || typeof numbers !== "object") {
    return <div>No data available</div>;
  }

  return (
    <div className="p-3">
      <header className="shadow p-1 mb-4 bg-self rounded">
        <h2 className="m-3  d-flex justify-content-center">
          <span className="text-success">エ</span>コフェス{""}
          <span className="text-success ms-2">大</span>抽選会
        </h2>
      </header>
      <h6 className="mb-3">2024年7月7日 16時～＠環境人間キャンパス体育館</h6>
      <p className="mb-4">
        ★このサイトは当選番号確認ページです！受付で配布したリストバンドをご用意ください！
        <br />
        ★たくさんの景品を用意して皆さんをお待ちしています！！
      </p>
      <div className="shadow p-3 mb-4 bg-self rounded">
        <h2 className="py-2 d-flex justify-content-center">
          ・＊◀ 当選番号 ▶＊・
        </h2>
        <div className="◀d-flex justify-content-between flex-wrap">
          {Object.keys(numbers).map((key) => (
            <div
              className="fs-5 my-2 mx-1 px-3 badge rounded-pill text-bg-success"
              key={key}
            >
              {numbers[key]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
