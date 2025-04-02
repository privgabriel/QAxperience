Quando('acesso a página principal da Starbugs') do
    visit 'https://starbugs-qa.vercel.app/'
    sleep 10 # Aguarda 10 segundos para garantir que a página carregou completamente
end
  
  Então('eu devo ver uma lista de cafés disponíveis') do
    pending # Write code here that turns the phrase above into concrete actions
end