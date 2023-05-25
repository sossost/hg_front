/** 가져온 좋아요 유저 목록에 로그인 유저가 속해있는지 확인하는 함수 인자로 (likedPersons[], loginedId) 를 넣으면 true, false를 반환함 */
export const isLikedFunction = (
  post: { likedPersons: number[] },
  loginedId: number
): boolean => {
  return post.likedPersons.includes(loginedId);
};
