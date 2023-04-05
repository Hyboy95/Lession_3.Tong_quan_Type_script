function main() {
    var message;
    var total = 100;
    // let isProduction = true;
    var isProduction = true;
    // let prices: Array<number> = [120, 88, "60"];
    var prices = [120, 88, 60];
    var languages = ['vi', 'en-us'];
    // let now = new Date();
    var now = new Date();
    var unknown;
    var Direction;
    (function (Direction) {
        Direction[Direction["UP"] = 0] = "UP";
        Direction[Direction["DOWN"] = 1] = "DOWN";
        Direction[Direction["LEFT"] = 2] = "LEFT";
        Direction[Direction["RIGHT"] = 3] = "RIGHT";
    })(Direction || (Direction = {}));
    ;
    function log(msg) {
        console.log(msg);
    }
    isProduction = false;
    unknown = Direction.UP;
    unknown = 'changed';
    // const post: IPost = {};
    var post = { id: '', title: '', body: '' };
    // message = 50;
    message = '50';
    function getPost(postId) {
        // do something to retrieve post
        return {
            id: postId,
            title: 'Post Title',
            body: 'Post Body',
            // extra: 'data'
        };
    }
}
// function main() {
// }
main();
