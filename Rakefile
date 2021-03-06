desc "generate basic app"
task :basic do
  sh %( git checkout master )
  sh %( git branch -D basic )
  sh %( git checkout -b basic )
  sh %( cd tester_app && bundle install )
  sh %( cd tester_app && rails generate react_on_rails:install )
  sh %( cd tester_app && bundle install )
  sh %( cd tester_app/client && npm install )
  sh %( git add . )
  sh %( git commit -m "Basic App Generated" )
end

desc "generate basic-server-rendering app"
task :basic_server_rendering do
  sh %( git checkout master )
  sh %( git branch -D basic-server-rendering )
  sh %( git checkout -b basic-server-rendering )
  sh %( cd tester_app && bundle install )
  sh %( cd tester_app && rails generate react_on_rails:install --server-rendering )
  sh %( cd tester_app && bundle install )
  sh %( cd tester_app/client && npm install )
  sh %( git add . )
  sh %( git commit -m "Basic App with Server Rendering Generated" )
end

desc "generate redux app"
task :redux do
  sh %( git checkout master )
  sh %( git branch -D redux )
  sh %( git checkout -b redux )
  sh %( cd tester_app && bundle install )
  sh %( cd tester_app && rails generate react_on_rails:install --redux )
  sh %( cd tester_app && bundle install )
  sh %( cd tester_app/client && npm install )
  sh %( git add . )
  sh %( git commit -m "Redux App Generated" )
end

desc "generate redux-server-rendering app"
task :redux_server_rendering do
  sh %( git checkout master )
  sh %( git branch -D redux-server-rendering )
  sh %( git checkout -b redux-server-rendering )
  sh %( cd tester_app && bundle install )
  sh %( cd tester_app && rails generate react_on_rails:install --redux --server-rendering )
  sh %( cd tester_app && bundle install )
  sh %( cd tester_app/client && npm install )
  sh %( git add . )
  sh %( git commit -m "Redux with Server Rendering App Generated" )
end

desc "force push all apps"
task :force_push do
  sh %( git checkout basic )
  sh %( git push origin basic -fu )
  sh %( git checkout basic-server-rendering )
  sh %( git push origin basic-server-rendering -fu )
  sh %( git checkout redux )
  sh %( git push origin redux -fu )
  sh %( git checkout redux-server-rendering )
  sh %( git push origin redux-server-rendering -fu )
end
