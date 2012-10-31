# Require any additional compass plugins here.
# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "www/css"
sass_dir = "sass"
images_dir = "www/img"
javascripts_dir = "www/js"
# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true
line_comments = false

asset_cache_buster do |path, real_path|
  if File.exists?(real_path)
    pathname = Pathname.new(path)
    hex = Digest::MD5.hexdigest(File.read(real_path))
    new_path = "%s?%s" % [path, hex]
    {:path => new_path, :query => nil}
  end
end
