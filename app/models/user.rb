class User < ApplicationRecord
    validates :username, :session_token, uniqueness: true, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

    attr_reader :password

    after_initialize :ensure_session_token

    def self.find_by_credentials(un,pw)
        user = User.find_by(username: un)
        return nil if user.nil?
        user.is_password?(pw) ? user : nil
    end

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def reset_session_token!
        self.session_token = SecureRandom::base64
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::base64
    end

end
