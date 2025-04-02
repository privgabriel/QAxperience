require 'capybara/cucumber'
require 'selenium-webdriver'

Capybara.configure do |config| 
    config.default_driver = :selenium_chrome # Use Chrome as the default browser
    config.default_max_wait_time = 5 # Set the default wait time for asynchronous processes
    config.app_host = 'https://www.example.com' # Replace with your app's URL
end