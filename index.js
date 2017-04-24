<!-- 节点的操作 -->

/**
 * 增
 */
$('body').append('<p>123</p>');

/**
 * 删
 */
//$('p').remove();

/**
 * 改
 */
$('body p').text('456');

/**
 * 查
 */
console.log($('body').find('p').html());

/**
 * 替换
 */
$('p').replaceWith('<div>888</div>');

/**
 * 复制
 */
$('body').append($('div').clone());

/**
 * 在div之前插入
 */
$('div').before('<p>000</p>')

/**
 * 在所有div之后插入
 */
$('div').after('<p>000</p>')

/**
 * 获取子元素的数量
 */
console.log($('body').children().length)

/**
 * 获取第一个子元素
 */
var first = $('body').children().first();

first.text(1);

console.log(first)

/**
 * 获取最后一个子元素
 */
var last = $('body').children().last();

last.text(6);

console.log(last)

/**
 * 获取指定位置的元素
 */
var index = $('body').children().eq(5)

console.log(index.text())

/**
 * 获取元素的位置
 */
console.log(index.index())

/**
 * 隐藏
 */
$('body').hide();

/**
 * 显示
 */
$('body').show();

<!-- 属性的操作 -->

/**
 * 添加属性
 */
$('body').attr('class','abc');

/**
 * 获取所有属性
 */
console.log($('body').attr('class'))

/**
 * 删除属性
 */
var node = $('body').removeAttr('class');

<!-- 样式操作 -->

/**
 * 设置样式
 */
$('div,p').css({

    width: '200px',
    height: '50px',
    backgroundColor: '#999'
})

/**
 * 获取样式
 */
console.log($('div').css('width'))

<!-- 事件发送与侦听 -->

/**
 * 鼠标点击/按下/弹起
 */
$('body').bind('click mousedown mouseup',function(e)
{
    console.log(e.type)
})

/**
 * 鼠标悬停/离开
 */
$('body').bind('mouseleave mouseenter',function(e)
{
    console.log(e.type)
})

/**
 * 键盘按下/弹起
 */
$('body').bind('keydown keyup',function(e)
{
    console.log(e.keyCode)
})

/**
 * 抛出自定义事件
 */
$('body').bind('click',function(e)
{
    $('body').trigger('myclick',[888888888888])
})

/**
 * 侦听自定义事件
 */
$('body').bind('myclick',function(e,data)
{
    console.log(data)
})

<!-- 写入与获取 -->

/**
 * 设置或获取文本
 */
console.log($('body').text())

/**
 * 设置或html结构文本
 */
console.log($('body').html())

/**
 * 设置或input值
 */
console.log($('input').val())

/**
 * 获取包含父节点的html结构文本
 */
console.log($('body').prop('outerHTML'))

<!-- 动画效果 -->

$("body").animate({marginTop:'100px'},1000,'linear',function(e)
{
    console.log('动画完成')
})

<!-- 网络请求 -->

 $.ajax(
 {
    type: "post",
    dataType: "json",
    url: 'server.php',
    data: '123',
    success: function (data) 
    {
        console.log('成功')
        console.log(data)
    },
    error: function (e) 
    {
        console.log('失败')
        console.log(e.code)
    }
});