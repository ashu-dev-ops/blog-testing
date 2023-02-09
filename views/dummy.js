<% blogs.forEach(elem => { %>
    <!-- <%= JSON.stringify(elem.blog)%> -->
    <div class="single-blog">
      <h3>
        <img height="30" src="/uploads/<%= elem.author.avatar%>" alt="" />
        <%= elem.author.name%>
      </h3>
      <div class="blog"><%- elem.blog%></div>
    </div>
    <% }) %>

    <%- include("partials/header")%>

<form action="/signin" method="post">
  <input type="email" name="email" placeholder="john@example.com" />
  <input type="password" name="password" placeholder="********" />
  <button>Sign In</button>
  <br />
  <a href="/forget-password">Forget Password ?</a>
</form>

<%- include("partials/footer")%>



<%- include("partials/header")%>

<form action="/forget-password" method="post">
    <input type="email" name="email" placeholder="example@email.com" />
    <button>Enter Registered Email</button>
</form>

<%- include("partials/footer")%>

// 
<%- include("partials/header")%>

<form action="/reset-password" method="post">
  <input type="password" name="oldpassword" placeholder="********" />
  <input type="password" name="newpassword" placeholder="********" />
  <button>Reset Password</button>
</form>

<%- include("partials/footer")%>