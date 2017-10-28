<template>
  <div class="sy-ft">
    <div class="sy-ftif1">
      <table border="1" class="sy-tab1" bordercolor="#dbdbdb">
        <tr>
          <td align="center" valign="middle"><router-link to="/home" href="javascript:;">首页</router-link></td>
          <td align="center" valign="middle"><router-link to="/home" href="javascript:;">什么是我想要？</router-link></td>
          <td align="center" valign="middle"><router-link to="/login" href="javascript:;">登录</router-link></td>
          <td align="center" valign="middle"><router-link to="/reg" href="javascript:;">注册</router-link></td>
        </tr>
      </table>
    </div>
    <p class="sy-ft-p1">联系电话 400-666-8888</p>
    <p class="sy-ft-p1">Copyright 2013-2015 我想要网站所有</p>
    <p class="sy-ft-p1">ICP备 130001001  xxx科技有限公司</p>
  </div>
</template>

<style>
  .sy-ft{ width:100%;margin-bottom:80px;}
  .sy-ftif1{ height:30px; background:#fff; margin-bottom:5px;}
  .sy-ftif1 .sy-tab1{ width:100%; height:30px;}
  .sy-tab1 td{ border:none;border-right:1px solid #dbdbdb;}
  .sy-tab1 td:nth-of-type(4){ border-right:0;}
  .sy-tab1 td a{ display:block; font-size:12px; color:#9b9b9b;}
  .sy-ft .sy-ft-p1{ font-size:12px; color:#9B9B9B; margin:0 15px; line-height:19px;}
</style>