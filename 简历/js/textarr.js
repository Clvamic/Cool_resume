
/*
*项目名: 个人简历
*创建者: 崔宇乐
*创建时间:2023.5.23 20:30:35
*联系方式:18829126610(微信同号)
*描述: 酷炫个人简历
*/

let textArr = [
    {
        name: 'h2',
        class: 'inten',
        text: '求职意向：前端开发工程师'
    }, {
        name: 'h4',
        class: 'text-title',
        text: '基本信息'
    }, {
        name: 'div',
        class: 'base-info',
        children: [{
            name: 'div',
            children: [{
                name: 'div',
                text: '姓名：崔宇乐'
            }, {
                name: 'div',
                text: '年龄：21'
            }]
        }, {
            name: 'div',
            children: [{
                name: 'div',
                text: '毕业院校：延安大学西安创新学院'
            }, {
                name: 'div',
                text: '联系电话：18829126610'
            }]
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '教育背景'
    }, {
        name: 'div',
        class: 'school',
        children: [{
            name: 'span',
            class: 'mr',
            text: '学校：延安大学西安创新学院'
        }, {
            name: 'span',
            text: '专业：计算机科学与技术'
        }, {
            name: 'div',
            text: '主修课程：HTML、CSS、JavaScript、Java、数据库',
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '专业技能'
    }, {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text: '熟悉使用',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'H5、CSS3、JavaScript'
            }]
        }, {
            name: 'li',
            text: '了解CSS底层机制、ES6特性，vue、Node.js等'
        }, {
            name: 'li',
            text: '了解前端主流',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'Vue框架'
            }]
        }, {
            name: 'li',
            text: '了解',
            children: [{
                name: 'span',
                text: 'git、webpack等开发工具、'
            }, {
                name: 'span',
                class: 'tag',
                text: '拥有自己的Gitee、GitHub仓库'
            }]
        }, {
            name: 'li',
            text: '了解微信小程序开发'
        }, {
            name: 'li',
            text: '拥有良好的代码风格，对建模有一定了解'
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '项目经验'
    }, {
        name: 'div',
        class: 'item-lv',
        children: [{
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '个人简历'
            }, {
                name: 'li',
                text: '使用技术栈：',
                children: [{
                    name: 'span',
                    text: 'HTML、'
                }, {
                    name: 'span',
                    text: 'CSS、'
                }, {
                    name: 'span',
                    text: 'JavaScript'
                }]
            }, {
                name: 'li',
                text: '项目描述：酷炫个人简历'
            }]
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '学校经历'
    }, {
        name: 'div',
        class: 'item-lv',
        children: [{
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '经历一：2021.09—2022.06    新闻传媒中心    短视频工作室副组长'
            }, {
                name: 'li',
                text: '负责运营学校官方抖音、视频号及官方B站，负责学校大型活动的短视频拍摄及后期剪辑工作。用镜头记录校园的人和事，捕捉学校各大活动的精彩瞬间。熟练使用相机、相机稳定器、航拍。'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '经历二：2021.09—2022.06    青年志愿者协会    部长'
            }, {
                name: 'li',
                text: '负责商讨志愿服务队的工作开展情况；组织志愿者发挥自身的优势和特长，广泛开展社会公德公益服务活动，增强社会人士的社会服务意识，提高综合素质，倡导了各界对心理健康的关注并且做一些活动的准备和收场工作。'
            }]
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '个人荣誉'
    }, {
        name: 'div',
        class: 'item-lv',
        children: [{
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                text: '2022年第十五届“认证杯”数学中国数学建模网络挑战赛一等奖'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                text: '2023年第十五届“认证杯”数学中国数学建模网络挑战赛一等奖'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                text: '2022年全国数学建模竞赛省赛二等奖'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                text: '2021年获得“优秀共青团员”称号'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                text: '2022年获得“防疫宣传员”称号'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                text: '2021年佰鸿集团创业孵化项目获得“校园大使”'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                text: '2023年在新东方校园获得“校园大使”'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                text: '2023年在奇安信集团获得“校园大使”'
            }]
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '自我评价'
    }, {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text: '本人性格沉稳、待人真诚，有较强的团队意识，能够很快融入集体'
        }, {
            name: 'li',
            text: '能吃苦耐劳，敢于尝试，喜欢学习前沿技术，富有责任感和荣誉感'
        }, {
            name: 'li',
            text: '为人诚恳勤奋好学脚踏实地，有较强的团队精神'
        }, {
            name: 'li',
            text: '工作积极进取，态度认真'
        }, {
            name: 'li',
            text: '有较强的抗压能力和强烈的责任感'
        }, {
            name: 'li',
            text: '善于思考，具有较强的学习能力'
        }, {
            name: 'li',
            text: '热爱前端，善于沟通和交流，具有较好的表达能力'
        }]
    }
]
let style = `
    /*
    * 面试官你好，我是崔宇乐，陕西榆林人
    * 为您精心准备一份不一样的简历来介绍自己
    * 首先准备一些样式
    */
    *{
        transition: all .8s;
    }
    /* 稍等，在容器上添加点样式 */
    #codeEdit{
        color: #fff;
        background: #1E1E1E;
    }
    #resume{
        box-shadow: -1px 4px 9px 3px rgba(0, 0, 0, .15);
    }
    /* 我需要一点代码高亮 */
    pre#codeEdit{
        color: #CE9e78;
    }
    .token.selector{
        color: rgb(230, 155, 43);
    }
    .token.comment{
        color: #6A9955;
        font-size: 14px;
    }
    .token.property{
        color: #60C8FE;
    }
    .token.function {
        color: #DD4A68;
    }
    /* 接下来请欣赏我的个人简历吧 */
`
let balloon = `
    <div class="balloon-wrap">
        <img src="images/balloon.png" id="bg-balloon-small">
        <img src="images/balloon.png" id="bg-balloon-large">
        <img src="images/logo.png" id="bg-balloon-logo">
    </div>
    <div class="connect" style="width: 100%; display: flex;"></div>`
let line = `
    <div class="line-wrap">
        <div class="line-left"></div>
        <div class="line-right">
            <p class="line-defColor line-item1"></p>
            <p class="line-darkColor line-item2"></p>
            <p class="line-defColor line-item3"></p>
            <p class="line-midColor line-item4"></p>
            <p class="line-darkColor line-item5"></p>
            <p class="line-midColor line-item6"></p>
            <p class="line-darkColor line-item7"></p>
            <p class="line-midColor line-item7"></p>
        </div>
    </div>
    <div class="connect"></div>`
let text = `
    <div class="text-wrap"></div>
`


