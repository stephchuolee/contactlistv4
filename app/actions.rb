# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts' do
  Contact.all.to_json
end 

# get '/contacts/new' do 
#   @contact = Contact.new
# end 

post '/contacts/new' do
  response = Hash.new
  response[:result] = false 
  contact = Contact.new(
    firstname: params[:firstname], 
    lastname: params[:lastname], 
    email: params[:email]) 

  if contact.save
    response[:result] = true
  else 
    errors.add(base: "wrong")
  end

  response.to_json

end

get '/contacts/:id' do
  @contact = Contact.find(params[:id]).to_json
end 

get '/contacts/:id/edit' do
  @contact = Contact.find(params[:id]).to_json
end 

put '/contacts/:id/edit' do
  response = Hash.new
  response[:result] = false 
  @contact = Contact.find(params[:id]).to_json
  if @contact.update_attributes(
    firstname: params[:firstname], 
    lastname: params[:lastname], 
    email: params[:email]
    )
    response[:result] = true
  end 
  response.to_json
end 

get '/contacts/search' do
end

delete '/contacts/:id' do
end 