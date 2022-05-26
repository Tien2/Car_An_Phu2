jQuery.easing.motion = function (x, t, b, c, d) {
  if (t == 0) return b;
  if (t == d) return b + c;
  if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
  return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
};
function cubeMotionInit() {
  var tmpString = "";
  var tmpLeft = parseInt(($(window).width() - 1920) / 2);
  tmpString = tmpString + '<div class="objects" style="width:1920px;">';
  tmpString =
    tmpString +
    '	<img src="./img/img_background/ba_bodyBG_1.png" id="object1" alt="" style="position:absolute;left:' +
    tmpLeft +
    'px;top:0;" /><br />';
  tmpString =
    tmpString +
    '	<img src="./img/img_background/ba_bodyBG_2.png" id="object2" alt="" style="position:absolute;left:' +
    tmpLeft +
    'px;top:0;" /><br />';
  tmpString =
    tmpString +
    '	<img src="./img/img_background/ba_bodyBG_3.png" id="object3" alt="" style="position:absolute;left:' +
    tmpLeft +
    'px;top:0;" /><br />';
  tmpString =
    tmpString +
    '	<img src="./img/img_background/ba_bodyBG_5.png" id="object4" alt="" style="position:absolute;left:' +
    tmpLeft +
    'px;top:0;" /><br />';
  tmpString =
    tmpString +
    '	<img src="./img/img_background/ba_bodyBG_5.png" id="object5" alt="" style="position:absolute;left:' +
    tmpLeft +
    'px;top:0;" /><br />';
  tmpString = tmpString + "</div>";
  $(".objects_box").append(tmpString);
  $("body").css(
    "background-image",
    "url(./img/img_background/grand_i10_bg.jpg)"
  );
  /* //0209 수정 */
}
function cubeMotionJS(va) {
  if (va == 1) {
    object_left = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  } else if (va == 2) {
    object_left = { 1: -50, 2: -30, 3: -30, 4: -40, 5: -30 };
  } else if (va == 3) {
    object_left = { 1: -110, 2: -60, 3: -50, 4: -100, 5: -80 };
  } else if (va == 4) {
    object_left = { 1: -150, 2: -130, 3: -70, 4: -130, 5: -130 };
  } else {
    object_left = { 1: -210, 2: -170, 3: -90, 4: -170, 5: -170 };
  }
  for (var i = 0; i <= 4; i++) {
    tmpleft = object_left[i + 1] + parseInt(($(window).width() - 1900) / 2);
    $(".objects_box .objects img")
      .eq(i)
      .css("position", "absolute")
      .css("zIndex", i);
    $(".objects_box .objects img")
      .eq(i)
      .animate({ left: tmpleft }, 900, "motion");
  }
}
