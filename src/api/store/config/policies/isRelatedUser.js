module.exports = async (ctx, next) => {
  const { user } = ctx.state; // ログインしているユーザー
  const { id } = ctx.params; // アクセスしようとしているストアのID

  // Storeを取得
  const store = await strapi.services.store.findOne({ id });

  // Storeが見つからない場合、404エラーを返す
  if (!store) {
    return ctx.throw(404, "Not Found");
  }

  // ログインしているユーザーがStoreに関連しているかチェック
  if (
    store.users_permissions_user &&
    store.users_permissions_user.id === user.id
  ) {
    return await next(); // 関連があれば次の処理に進む
  } else {
    return ctx.throw(403, "Forbidden"); // 関連がなければ403エラーを返す
  }
};
